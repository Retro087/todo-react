import React from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useParams } from "react-router";

let Main = () => {
  return (
    <div className="main">
      <PageLayout>
        <SideLayout>
          <LeftSide />
          <MainSide />
        </SideLayout>
      </PageLayout>
    </div>
  );
};

export default Main;
