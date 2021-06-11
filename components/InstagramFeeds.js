import InstagramFeed from "react-ig-feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import InstagramEmbed from "react-instagram-embed";
export default function InstagramFeeds() {
  return (
    <div className="instagram">
      <InstagramEmbed
        url="https://www.instagram.com/p/CKETDqSh0VK/"
        clientAccessToken="322649149328028|1cee39ca3a79a897358a4062a6db4096"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      
      <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
        Find us on Instagram
        <span>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{
              width: "30px",
              cursor: "pointer",
              color: "#000",
              marginLeft: "10px",
            }}
          />
        </span>
      </h1>
      <InstagramFeed
        token="IGQVJXTkdsVFlOQnpVODZAHVGl0WjM5bHVNZAWpRd1I4dGJmZA0QzRHU3ZAmhuSTgzWlpJNGhmQVJ0WmVTNmIyMDlDek5KeGZABLVBuMHlLamt4bGZAXZA204ZAnpxTUN5RnYxNl9NSWdGMHhRWGtzbmFXQVFFOQZDZD"
        counter="9"
      />
    </div>
  );
}
