import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { useFormContext, SubmitHandler } from "react-hook-form";

type Props = Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> & {
  onSubmit: SubmitHandler<any>;
};

const baseClass = "flex flex-col gap-4";

const Form = ({ onSubmit, children, className }: Props) => {
  const { handleSubmit } = useFormContext();
  const styles = twMerge(baseClass, className);

  return (
    <form className={styles} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};

export { Form };
