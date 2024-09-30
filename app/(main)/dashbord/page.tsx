import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Poți verifica dacă utilizatorul este autentificat aici
    // Dacă nu este autentificat, redirectează-l la pagina de login
    const userAuthenticated = false; // Schimbă logica după integrarea login-ului
    if (!userAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bine ai venit!</p>
    </div>
  );
}
