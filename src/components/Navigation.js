import { Tab, Tabs } from '@material-ui/core';
import { matchPath, NavLink, useLocation, Redirect } from 'react-router-dom';
import Tech from './Tech';
import Company from './Company';
import Projects from './Projects';
import Reports from './Reports';

const navItems = [
  {
    id: 'tech',
    path: '/tech',
    text: 'Technologies',
    component: <Tech />
  },
  {
    id: 'companies',
    path: '/companies',
    text: 'Companies',
    component: <Company />
  },
  {
    id: 'projects',
    path: '/projects',
    text: 'Projects',
    component: <Projects />
  },
  {
    id: 'reports',
    path: '/reports',
    text: 'Reports',
    component: <Reports />
  },
];

export default function Navigation() {
  const { pathname } = useLocation();
  const activeItem = navItems.find((item) => !!matchPath(pathname, { path: item.path }));
  return (
      <>
    <Tabs value={activeItem?.id}>
      {navItems.map((item) => (
        <Tab key={item.id} value={item.id} label={item.text} 
            component={NavLink} to={item.path} />
      ))}
       <Redirect to="/tech" />
    </Tabs>
    {activeItem?.component}
    </>
  );
}