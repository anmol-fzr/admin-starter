import { Text } from "@tremor/react";

const Label = ({ label }: { label?: string }) => (
  <Text className="dark:text-white ">{label}</Text>
);

export { Label };
