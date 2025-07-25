// components/ui/Icon.tsx
"use client"; // Marks this file as a Client Component in Next.js, as FontAwesomeIcon runs on the client.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Imports the FontAwesomeIcon component.
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Imports the IconDefinition type for Font Awesome icons.
import {
  faArrowLeft,
  faCog,
  faCheck,
  faPrint,
  faEnvelope,
  faCheckCircle,
  faExternalLinkAlt,
  faSyncAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons"; // Imports specific solid icons from Font Awesome.

/**
 * iconMap
 *
 * A mapping object that associates string names with their corresponding Font Awesome IconDefinition objects.
 * This allows the `Icon` component to receive a simple string `name` prop and resolve it to the correct icon definition.
 */
const iconMap: Record<string, IconDefinition> = {
  "arrow-left": faArrowLeft,
  cog: faCog,
  check: faCheck,
  print: faPrint,
  envelope: faEnvelope,
  "check-circle": faCheckCircle,
  "external-link-alt": faExternalLinkAlt,
  "sync-alt": faSyncAlt,
  download: faDownload,
};

/**
 * Icon Component
 *
 * A lightweight wrapper around the `FontAwesomeIcon` component to simplify
 * icon usage by allowing icons to be referenced by their string names.
 * It also supports applying custom CSS classes for styling.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.name - The string name of the icon (e.g., "arrow-left", "cog"). This name must exist in `iconMap`.
 * @param {string} [props.className=""] - Optional Tailwind CSS classes to apply to the icon.
 */
export default function Icon({
  name,
  className = "", // Default empty string for optional classes.
}: {
  name: string;
  className?: string;
}) {
  // Renders the FontAwesomeIcon component, mapping the `name` prop to the actual icon definition.
  // Applies any additional `className` passed to the component.
  return <FontAwesomeIcon icon={iconMap[name]} className={className} />;
}
