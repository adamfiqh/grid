import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

function helloWorld() {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: [
      ["adam", "adam@email.com", "(+62) 01 222 3333"],
      ["asnawi", "asnawi@gmail.com", "(+62) 22 888 4444"],
    ],
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

  return <div ref={wrapperRef} />;
}
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
