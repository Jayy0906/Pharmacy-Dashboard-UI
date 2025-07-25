import { ReactNode } from "react"; // Imports ReactNode type for children prop.

/**
 * CardSectionProps Interface
 * Defines the props accepted by the CardSection component.
 * @property {string} title - The title displayed at the top of the card section.
 * @property {string} [iconClass] - Optional Tailwind CSS class for an icon to be displayed next to the title.
 * @property {ReactNode} children - The content to be rendered inside the card section.
 */
interface CardSectionProps {
  title: string;
  iconClass?: string;
  children: ReactNode;
}

/**
 * CardSection Component
 *
 * A reusable container component for displaying sections of content within a card-like UI.
 * It features a title and an optional icon, encapsulating its children within a styled `section` element.
 *
 * @param {CardSectionProps} props - The properties for the component.
 * @param {string} props.title - The title of the section.
 * @param {string} [props.iconClass] - Optional CSS classes for an icon displayed before the title.
 * @param {ReactNode} props.children - The content to be rendered inside this section.
 */
export default function CardSection({
  title,
  iconClass,
  children,
}: CardSectionProps) {
  return (
    // Section element acting as the card container with background, padding, rounded corners, and shadow.
    <section className="bg-white rounded-lg p-6 shadow-sm">
      {/* Heading for the card section, styled with Tailwind CSS for font, text color, and flex alignment. */}
      <h2 className="text-slate-900 font-semibold text-sm flex items-center gap-2 mb-4">
        {/* Conditionally renders an icon if `iconClass` prop is provided. */}
        {iconClass && <i className={`${iconClass} text-emerald-600`} />}
        {/* Displays the title of the card section. */}
        {title}
      </h2>
      {/* Renders the children components passed into the CardSection. */}
      {children}
    </section>
  );
}
