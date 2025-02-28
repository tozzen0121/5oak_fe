// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HomeOutlined, CodeSandboxOutlined, TeamOutlined, WifiOutlined, ScheduleOutlined, ContactsOutlined, SolutionOutlined, LineChartOutlined } from '@ant-design/icons';

// icons
const icons = {
    HomeOutlined, 
    CodeSandboxOutlined, 
    TeamOutlined, 
    WifiOutlined, 
    ScheduleOutlined, 
    ContactsOutlined, 
    SolutionOutlined, 
    LineChartOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const admin = {
  id: 'admin', 
  title: <FormattedMessage id="admin" />,
  type: 'group',
  children: [
    {
      id: 'home',
      title: <FormattedMessage id="home" />,
      type: 'item',
      url: '/admin/home',
      icon: icons.HomeOutlined, 
    }, 
    {
      id: 'games',
      title: <FormattedMessage id="games" />,
      type: 'item',
      url: '/admin/games',
      icon: icons.CodeSandboxOutlined, 
    }, 
    {
      id: 'games-create',
      title: <FormattedMessage id="games-create" />,
      type: 'hidden',
      url: '/admin/games-create',
      breadcrumbs: true
    }, 
    {
      id: 'games-edit',
      title: <FormattedMessage id="games-edit" />,
      type: 'hidden',
      urlLike: '/admin/games-edit',
      breadcrumbs: true
    }, 
    {
      id: 'team',
      title: <FormattedMessage id="team" />,
      type: 'item',
      url: '/admin/team',
      icon: icons.TeamOutlined, 
    }, 
    {
      id: 'employee-create',
      title: <FormattedMessage id="employee-create" />,
      type: 'hidden',
      url: '/admin/employee-create',
      breadcrumbs: true
    }, 
    {
      id: 'employee-edit',
      title: <FormattedMessage id="employee-edit" />,
      type: 'hidden',
      urlLike: '/admin/employee-edit',
      breadcrumbs: true
    }, 
    {
      id: 'news',
      title: <FormattedMessage id="news" />,
      type: 'item',
      url: '/admin/news',
      icon: icons.WifiOutlined, 
    }, 
    {
      id: 'news-create',
      title: <FormattedMessage id="news-create" />,
      type: 'hidden',
      url: '/admin/news-create',
      breadcrumbs: true
    }, 
    {
      id: 'news-edit',
      title: <FormattedMessage id="news-edit" />,
      type: 'hidden',
      urlLike: '/admin/news-edit',
      breadcrumbs: true
    }, 
    {
      id: 'jobs',
      title: <FormattedMessage id="jobs" />,
      type: 'item',
      url: '/admin/jobs',
      icon: icons.ScheduleOutlined, 
    }, 
    {
      id: 'job-create',
      title: <FormattedMessage id="job-create" />,
      type: 'hidden',
      url: '/admin/job-create',
      breadcrumbs: true
    }, 
    {
      id: 'job-edit',
      title: <FormattedMessage id="job-edit" />,
      type: 'hidden',
      urlLike: '/admin/job-edit',
      breadcrumbs: true
    }, 
    {
      id: 'careers',
      title: <FormattedMessage id="careers" />,
      type: 'item',
      url: '/admin/careers',
      icon: icons.SolutionOutlined, 
    }, 
    {
      id: 'applicant',
      title: <FormattedMessage id="applicant" />,
      type: 'hidden',
      urlLike: '/admin/applicant',
      breadcrumbs: true
    }, 
    {
      id: 'contacts',
      title: <FormattedMessage id="contacts" />,
      type: 'item',
      url: '/admin/contacts',
      icon: icons.ContactsOutlined, 
    }, 
    {
      id: 'enquery',
      title: <FormattedMessage id="enquery" />,
      type: 'hidden',
      urlLike: '/admin/enquery',
      breadcrumbs: true
    }, 
    {
      id: 'report',
      title: <FormattedMessage id="report" />,
      type: 'item',
      url: '/admin/report',
      icon: icons.LineChartOutlined, 
    }, 
    {
      id: 'report-one',
      title: <FormattedMessage id="report-one" />,
      type: 'hidden',
      url: '/admin/report-one/:id',
      icon: icons.LineChartOutlined, 
    }
  ]
};


export default admin;
