import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@tremor/react";
import toast from "react-hot-toast";
import { Form, Input } from "@/components";
import { resolver } from "@/utils";
import { loginSchema } from "@/schema";
import API from "@/service";
import { ILoginForm, ILoginReqData } from "@/types";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";

const updateCreds = useAuthStore.getState().updateCreds;

const onLogin = (data: ILoginReqData, onSuccess: () => void) => {
  const id = toast.loading("Login ...");

  API.AUTH.LOGIN(data)
    .then((res) => {
      const { statusMessage } = res.data.status;
      const { token, email, username } = res.data.content;

      updateCreds({
        token,
        isLogin: true,
        username,
        email,
      });

      toast.success(statusMessage, { id });
      onSuccess()
    })
    .catch((err) => {
      console.log(err);
      toast.error("", { id });
    });
};


const Login = () => {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: resolver(loginSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    onLogin(data, () => {
      navigate("/")
    })
  };

  return (
    <div className="flex items-center justify-center w-screen md:h-screen">
      <div className="flex flex-col items-center w-full p-4 mx-auto border rounded-lg md:max-w-md ">
        <h3 className="font-semibold text-center text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Log in
        </h3>
        <FormProvider {...methods}>
          <Form onSubmit={onSubmit} >
            <Input label="Username" value="admin" name="username" />
            <Input
              label="Password"
              type="password"
              // value="GfTpL~2018"
              name="password"
            />
            <Button variant="primary" size="md" className="mt-4" type="submit">
              Login
            </Button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login 
