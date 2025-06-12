// Button component interface
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Layout component interface
export interface LayoutProps {
  children: React.ReactNode;
}

// Page routing interface
export interface PageRouteProps {
  pageRoute: string;
}
