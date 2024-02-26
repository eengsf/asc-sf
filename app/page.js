"use client";

import TopNavbar from "@/components/TopNavbar";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import store from "@/store/index.js";
import Pages from "@/components/Pages";

export default function Home() {
  return (
    <Provider store={store}>
      <TopNavbar />
      <Header />
      <div>
        <Pages />
      </div>
    </Provider>
  );
}
