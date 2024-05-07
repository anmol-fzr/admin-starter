import { TextInput, TextInputProps } from "@tremor/react";
import { Label } from "@/components";
import { useFormContext } from "react-hook-form";

type InputProps = TextInputProps & {
  name: string;
  label: string;
};

const Input = ({ label, name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name as keyof typeof errors]?.message as any;
  const hasError = Boolean(error);

  return (
    <div className="w-full max-w-md">
      <Label {...{ label }} />
      <TextInput
        style={{ outline: "none" }}
        error={hasError}
        {...props}
        {...register(name)}
        errorMessage={error}
        className="th-text-input !disabled:!cursor-not-allowed"
      />
    </div>
  );
};

export { Input };
export type { InputProps };
