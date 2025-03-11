import { ReactNode, SVGProps } from 'react';

interface SvgProps extends SVGProps<SVGSVGElement> {
  children: ReactNode;
  title?: string;
  titleId?: string;
  solid?: boolean;
}

/**
 * The `Svg` component is a customizable wrapper for SVG elements.
 *
 * This component provides a flexible way to create SVG icons with customizable properties such as
 * the icon's color, stroke width, and title. It also supports accessibility features like the ability
 * to set a title and `aria-labelledby` for screen readers.
 *
 * @param children - The SVG content (usually paths or shapes) to be rendered inside the `svg` element.
 * @param title - An optional title for the SVG, used for accessibility. It will be wrapped in a `<title>` tag.
 * @param titleId - An optional `id` for the `<title>` element, which can be referenced by `aria-labelledby`.
 * @param solid - A boolean to specify whether the icon should be filled with the current color (`true`) or only have a stroke (`false` or undefined).
 * @param props - Additional SVG properties such as `className`, `style`, and any other standard `SVG` attributes.
 *
 * @returns The rendered SVG element with the provided children and optional customizations.
 *
 * @example
 * <Svg title="Icon title" solid>
 *   <path d="M10 14l-4-4 1-1 3 3 7-7 1 1z" />
 * </Svg>
 *
 * @example
 * <Svg title="Icon title" titleId="title-id">
 *   <path d="M6 18L18 6M6 6l12 12" />
 * </Svg>
 */
export default function Svg({
  children,
  title,
  titleId,
  solid,
  ...props
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      data-slot="icon"
      aria-labelledby={titleId}
      fill={solid ? 'currentColor' : 'none'}
      {...(!solid && { strokeWidth: 1.5, stroke: 'currentColor' })}
      {...props}
    >
      {title && <title id={titleId}>{title}</title>}
      {children}
    </svg>
  );
}
