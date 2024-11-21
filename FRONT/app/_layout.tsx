import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
