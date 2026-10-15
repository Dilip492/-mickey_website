import { useMutation, useQuery } from "@tanstack/react-query";

import { loginApi, RegisterApi } from "../api/authapi";
import { useAuthContext } from "../context/AuthContext";







const useAuth = () => {

    // const setUser = useAuthStore((state) => state.setUser);
    // const authStore = useAuthStore.getState();

    // const setUser = useAuthStore(
    //     (state) => state.setUser
    // );

    const { setUser } = useAuthContext();
    const loginMutation = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {

            if (data?.success && data?.user) {
                setUser(data.user);
            }
            // console.log("Login Success", data);
            // authStore.setUser(data.user);

            // setUser(data.user);
            // localStorage.setItem("token", data.token);
        },
        onError: (error) => {
            // console.log("Login Error", error.response?.data);
        }
    });

    const RegisterMutation = useMutation({
        mutationFn: RegisterApi,
        onSuccess: (data) => {
            if (data?.success && data?.user) {
                setUser(data.user);
            }
            // console.log("register Success", data);
            // authStore.setUser(data.user);

            // setUser(data.user);
            // localStorage.setItem("token", data.token);
        },
        onError: (error) => {
            console.log("register Error", error.response?.data);
        }
    });

    // const LogoutMutation = useMutation({
    //     mutationFn: LogoutApi,
    //     onSuccess: (data) => {
    //         console.log("logout successfully..", data);
    //     }
    // })


    // const {
    //     data: profileData,
    //     isLoading: profileLoading,
    //     isError: profileIsError,
    //     error: profileError,
    //     refetch
    // } = useQuery({
    //     queryKey: ["profile"],
    //     queryFn: ProfileApi,
    // });





    return {
        login: loginMutation.mutateAsync,
        loginError: loginMutation.onError,
        loginLoading: loginMutation.isPending,

        register: RegisterMutation.mutateAsync,
        registerLoading: RegisterMutation.isPending,
        registerError: RegisterMutation.error,

        // Logout: LogoutMutation.mutateAsync,


        // getProfile: profileData,
        // profileLoading,
        // profileIsError,
        // profileError,
        // refetchProfile: refetch,
    }


}







export default useAuth;