import { LoginGet } from "../../data-type";
import { api } from "../../services/rtk-api";

const authorized = (): boolean => !!sessionStorage.getItem("token") ?? false;

export const useLogin = (): {
  data: LoginGet | undefined,
  isLoading: boolean,
  isAuth: boolean,
} => {
  const isAuth = authorized();
  const { data, isLoading } = api.endpoints.getLogin.useQuery();

  return { data, isLoading, isAuth };
};
