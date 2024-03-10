// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
// import CrmSessions from 'src/views/dashboards/crm/CrmSessions'
// import CrmRevenueGrowth from 'src/views/dashboards/crm/CrmRevenueGrowth'
// import CrmBrowserStates from 'src/views/dashboards/crm/CrmBrowserStates'
// import CrmProjectStatus from 'src/views/dashboards/crm/CrmProjectStatus'
// import CrmActiveProjects from 'src/views/dashboards/crm/CrmActiveProjects'
// import CrmLastTransaction from 'src/views/dashboards/crm/CrmLastTransaction'
// import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'
// import CrmSalesWithAreaChart from 'src/views/dashboards/crm/CrmSalesWithAreaChart'
// import CrmSalesWithRadarChart from 'src/views/dashboards/crm/CrmSalesWithRadarChart'
// import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import ApexLineChart from 'src/views/charts/apex-charts/ApexLineChart'
import AnalyticView from 'src/views/dashboards/analytics/AnalyticsView'

// import EcommerceStatistics from 'src/views/dashboards/ecommerce/EcommerceStatistics'

// import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'

// import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        {/* <Grid item xs={6} sm={4} lg={2}>
          <CrmSalesWithAreaChart />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CrmSessions />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='1.28k'
            chipText='-12.2%'
            chipColor='default'
            avatarColor='error'
            title='Total Profit'
            subtitle='Last week'
            avatarIcon='tabler:currency-dollar'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            stats='24.67k'
            chipText='+25.2%'
            avatarColor='info'
            chipColor='default'
            title='Total Sales'
            subtitle='Last week'
            avatarIcon='tabler:chart-bar'
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={4}>
          <CrmRevenueGrowth />
        </Grid>
        <Grid item xs={12} lg={12}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesWithRadarChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmBrowserStates />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmProjectStatus />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmActiveProjects />
        </Grid>
        <Grid item xs={12} md={6}>
          <CrmLastTransaction />
        </Grid>
        <Grid item xs={12} md={6}>
          <CrmActivityTimeline />
        </Grid> */}
        <Grid item xs={12} lg={12}>
          <AnalyticView />
        </Grid>
        <Grid item xs={12} mt={-5} lg={12}>
          <ApexLineChart />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
