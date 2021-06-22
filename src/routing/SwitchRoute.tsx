import { Route, Switch } from "./Routing";
import _ from "lodash";
import { types } from "mobx-state-tree";
import { useRef } from "react";
import { observer } from "mobx-react-lite";
import NotFound from "page/NotFound";

interface SwitchRouteProps {
  routes: { [key: string]: any };
  role?: any;
  ready?: any;
  roles?: { [key: string]: any };
}

const RouteStateModel = types
  .model({
    rootPaths: types.array(types.string)
  })
  .actions((self: any) => ({
    setRootPaths: (rootPaths: string[]) => {
      self.rootPaths = rootPaths;
    }
  }));

export const RouteState = RouteStateModel.create();

export default observer((p: SwitchRouteProps) => {
  const componentRef = useRef({} as any);
  return (
    <Switch>
      {Object.keys(p.routes).map((route: string) => {
        if (!componentRef.current[route]) {
          if (typeof p.routes[route] === "function") {
            componentRef.current[route] = p.routes[route];
          } else {
            componentRef.current[route] = () => p.routes[route];
          }
        }
        
        return (
          <Route
            hideNavBar={true}
            exact={true}
            key={route}
            path={route}
            component={componentRef.current[route]}
          />
        );
        
      })}
      
      <Route component={NotFound} />
    </Switch>
  );
});