import { types } from "mobx-state-tree";

const Session = types.model({
  id: types.string,
  email: types.string,
  roleId: types.string,
  roleName : types.maybeNull(types.string),
  coorporateId: types.maybeNull(types.string),
  name: types.string,
  defaultMenu : types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  phoneNumber: types.maybeNull(types.string), 
  birth : types.maybeNull(types.string),
  address: types.maybeNull(types.string),
  country: types.maybeNull(types.string),
  registrationNumber: types.maybeNull(types.string),  
});

interface SessionProps {
  id: string,
  email: string,
  roleId: string,
  roleName: string|null,
  coorporateId: string|null,
  name: string,
  defaultMenu: string | null,
  image: string | null,
  phoneNumber: string | null,
  birth: string|null,
  address: string|null,
  country: string|null,
  registrationNumber: string|null
}

const UserMenu = types.model({
  path: types.string,
});

const UserRole = types.model({
  roleName: types.string,
  paths: types.array(UserMenu)
});

const Store = types
  .model({
    session: Session,
    menu: UserRole
  })
  .views(self => ({
    getSession() {
      return self.session;
    },
    getUserMenu() 
    {
      return self.menu;
    }
  }))
  .actions(self => ({
    setSession(s: SessionProps) {
      self.session = s;
    },
    setMenu(s: any) {
      self.menu = s;
    },
    removeSession() {
      self.session = DefaultSession;
    },
    removeMenu() {
      (self as any).menu = DefaultMenu;
    },
  }));

const DefaultSession = {
  id: "",
  email: "",
  roleName:null,
  coorporateId:null,
  roleId: "",
  name: "",
  defaultMenu:null,
  image: null,
  phoneNumber: null,
  birth:null,
  address: null,
  country: null,
  registrationNumber: null,
};

const DefaultMenu = {
  roleName: "",
  paths: [{path:"/"}]
};

// create an instance from a snapshot
export default Store.create({
  session: DefaultSession,
  menu : DefaultMenu,
});