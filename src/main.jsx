import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./route/Routes";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="mx-auto">
          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
    ;
  </React.StrictMode>
);
