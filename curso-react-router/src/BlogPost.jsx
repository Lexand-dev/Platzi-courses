import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./Auth";
import { blogdata } from "./blogdata";

export default function BlogPost() {
  const navigation = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const backtopage = () => {
    navigation("/blog");
  };

  const canDelete = auth.user?.hisRole?.role.delete;
  const canCreate = auth.user?.hisRole?.role.create;

  return (
    <div>
      <button onClick={backtopage}>Volver atrás</button>
      <h1>{blogpost.title}</h1>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canCreate && <button>Crear blog</button>}
      {canDelete && <button>Eliminar blog</button>}
    </div>
  );
}
