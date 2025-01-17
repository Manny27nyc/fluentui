import * as React from 'react';

/**
 * The context provided by TooltipProvider
 */
export type TooltipVisibilityContextValue = {
  /**
   * When a tooltip is shown, it sets itself as the visibleTooltip.
   * The next tooltip to become visible can use it to hide the previous tooltip immediately.
   */
  visibleTooltip?: {
    hide: () => void;
  };
};

/**
 * Context shared by all of the tooltips in the app
 */
const TooltipVisibilityContext = React.createContext<TooltipVisibilityContextValue>({});

export const { Provider: TooltipVisibilityProvider } = TooltipVisibilityContext;

export function useTooltipVisibility(): TooltipVisibilityContextValue {
  return React.useContext(TooltipVisibilityContext);
}
