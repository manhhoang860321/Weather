import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WeatherToDay from "./WeatherToDay";
import WeatherWeek from "./WeatherWeek";
import WeatherHour from "./WeatherHour";

export default ({ dataTab, dataTime, dataDate, dataLatLon }) => (
  <Tabs>
    <TabList>
      <Tab>ToDay</Tab>
      <Tab>Week</Tab>
      <Tab>Hour</Tab>
    </TabList>

    <TabPanel>
      <WeatherToDay
        dataWeek={dataTab}
        dataTime={dataTime}
        dataDate={dataDate}
        dataWeekAll={dataLatLon}
      ></WeatherToDay>
      {/* <h2> 1</h2> */}
    </TabPanel>
    <TabPanel>
      <WeatherWeek dataHour={dataTab}></WeatherWeek>
      {/* <h2> 2</h2> */}
    </TabPanel>
    <TabPanel>
      <WeatherHour dataHour={dataTab}></WeatherHour>
      {/* <h2> 3</h2> */}
    </TabPanel>
  </Tabs>
);
