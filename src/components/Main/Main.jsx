import Grid from "../Grid";
import { Suspense } from "react";
import CenteredLoader from "../CenteredLoader";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Grid size={{ xs: 12, sm: 7, lg: 9 }} className="p-3 shadow-sm bg-light">
      <Suspense fallback={<CenteredLoader />}>
        <Outlet />
      </Suspense>
    </Grid>
  );
};

export default Main;
