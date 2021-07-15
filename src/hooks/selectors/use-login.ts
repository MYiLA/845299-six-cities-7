import { LoginGet } from "../../data-type";
import { api } from "../../services/rtk-api";

const authorized = (): boolean => !!sessionStorage.getItem("token") ?? false;

export const useLogin = (): {
  data: LoginGet | undefined,
  isLoading: boolean,
  isAuth: boolean,
  refetch: () => void,
} => {
  const isAuth = authorized();
  const { data, isLoading, refetch } = api.endpoints.getLogin.useQuery();

  return { data, isLoading, isAuth, refetch };
};
