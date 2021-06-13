import InstagramFeed from "react-ig-feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function InstagramFeeds() {
  return (
    <div className="instagram">
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
        Find us on Instagram
        <span>
          <a href="https://www.instagram.com/game.boards/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                width: "30px",
                cursor: "pointer",
                color: "#000",
                marginLeft: "10px",
              }}
            />
          </a>
        </span>
      </h1>
      <InstagramFeed
        token="IGQVJXTkdsVFlOQnpVODZAHVGl0WjM5bHVNZAWpRd1I4dGJmZA0QzRHU3ZAmhuSTgzWlpJNGhmQVJ0WmVTNmIyMDlDek5KeGZABLVBuMHlLamt4bGZAXZA204ZAnpxTUN5RnYxNl9NSWdGMHhRWGtzbmFXQVFFOQZDZD"
        counter="9"
      />
    </div>
  );
}
