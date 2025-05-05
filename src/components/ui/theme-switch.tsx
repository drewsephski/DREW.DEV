import React from "react";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

export function ThemeSwitch({ className, ...props }: SwitchProps) {
  const { setTheme, theme } = useTheme();
  const isSSR = useIsSSR();
  const { inputProps, state } = useSwitch(props);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className={clsx(
        "relative inline-flex h-6 w-11 items-center rounded-full",
        state.isSelected ? "bg-primary" : "bg-neutral-200 dark:bg-neutral-700",
        className
      )}
      {...inputProps}
      onClick={toggleTheme}
      disabled={isSSR}
    >
      <span
        className={clsx(
          "inline-block h-4 w-4 transform rounded-full bg-white transition",
          state.isSelected ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}
