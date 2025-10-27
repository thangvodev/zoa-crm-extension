// Styles
import "./presentation/styles/app.scss";

// Custom zaui
import "./presentation/styles/zaui.scss";

// Import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./presentation/styles/swiper.scss";

// Import tailwind styles
import "./presentation/styles/tailwind.css";

// Custom antd css
import "./presentation/styles/antd.scss";

// Font
import "./presentation/styles/fonts.css";

// Leaflet stylesheet
import "leaflet/dist/leaflet.css";
import "./presentation/styles/leaflet.scss";

// React photo album
import "react-photo-album/styles.css";

// zaui
import "zmp-ui/zaui.css";
import "./presentation/styles/Topbar.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("app")!);

root.render(App());
