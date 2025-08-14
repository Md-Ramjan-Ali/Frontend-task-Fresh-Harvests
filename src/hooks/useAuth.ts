import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  return {
    session,
    status,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
};
