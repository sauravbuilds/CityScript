import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Nav/Nav";

function Reports() {
  // Dummy data for charts
  const areaChartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

  const pieChartData = [
    { name: "Online", value: 400, color: "#8884d8" },
    { name: "Offline", value: 300, color: "#82ca9d" },
    { name: "Direct", value: 300, color: "#ffc658" },
    { name: "Social", value: 200, color: "#ff7c7c" },
  ];

  const statsData = {
    totalSale: 0,
    totalEarning: 0,
    totalRefund: 0,
    totalRegistrations: 0,
  };

  return (
    <>
      <Navbar />
      <div className="event-body p-8 fade-in-visible">
        {/* Stats Section */}
        <div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mt-22">
              {/* Net Sales Card */}
              <div className="flex-grow text-center">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="overview">
                    <h3 className="text-3xl font-light mb-2 text-gray-800">
                      <span className="text-gray-500">₹</span>
                      <span className="ml-1">{statsData.totalSale}</span>
                    </h3>
                    <h5 className="text-sm text-gray-600">Net Sales</h5>
                  </div>
                </div>
              </div>

              {/* Net Earnings Card */}
              <div className="flex-grow text-center">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="overview">
                    <h3 className="text-3xl font-light mb-2 text-gray-800">
                      <span className="text-gray-500">₹</span>
                      <span className="ml-1">{statsData.totalEarning}</span>
                    </h3>
                    <h5 className="text-sm text-gray-600">Net Earnings</h5>
                  </div>
                </div>
              </div>

              {/* Refunds Card */}
              <div className="flex-grow text-center">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="overview">
                    <h3 className="text-3xl font-light mb-2 text-gray-800">
                      <span className="text-gray-500">₹</span>
                      <span className="ml-1">{statsData.totalRefund}</span>
                    </h3>
                    <h5 className="text-sm text-gray-600">Refunds</h5>
                  </div>
                </div>
              </div>

              {/* Registration Card */}
              <div className="flex-grow text-center">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="overview">
                    <h3 className="text-3xl font-light mb-2 text-gray-800">
                      <span>{statsData.totalRegistrations}</span>
                    </h3>
                    <h5 className="text-sm text-gray-600">Registration</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty Section */}
        <div className="container mx-auto">
          <div className="row">
            <div className="col-12 pt-5 pb-2">
              {/* Empty section as in original */}
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div>
          <div className="container mx-auto">
            <div className="row">
              <div className="col-12 pt-5 pb-8">
                {/* Empty section as in original */}
              </div>
            </div>

            {/* First Row of Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Number of Tickets Sold - 7 cols */}
              <div className="lg:col-span-7 pt-5 pb-8">
                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">
                      Number of Tickets Sold
                    </span>
                    <ArrowDownTrayIcon
                      className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      title="Download"
                    />
                  </div>
                  <div className="p-4 relative">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={areaChartData}>
                          <defs>
                            <linearGradient
                              id="colorTickets"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#d01c68"
                                stopOpacity={0.75}
                              />
                              <stop
                                offset="95%"
                                stopColor="#d01c68"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#C0D0E0"
                          />
                          <XAxis dataKey="name" />
                          <YAxis
                            label={{
                              value: "Tickets",
                              angle: -90,
                              position: "insideLeft",
                              style: { fill: "#cdcbd0" },
                            }}
                          />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#d01c68"
                            fillOpacity={1}
                            fill="url(#colorTickets)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                      {/* NO DATA Overlay */}
                      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="font-bold text-gray-600">NO DATA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakup of Tickets Sold - 5 cols */}
              <div className="lg:col-span-5 pt-5 pb-8">
                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">
                      Breakup of Tickets Sold
                    </span>
                    <ArrowDownTrayIcon
                      className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      title="Download"
                    />
                  </div>
                  <div className="p-4 relative">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* NO DATA Overlay */}
                      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="font-bold text-gray-600">NO DATA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row of Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Breakup of Net Earnings - 5 cols */}
              <div className="lg:col-span-5 pt-5 pb-8">
                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">
                      Breakup of Net Earnings (in INR)
                    </span>
                    <ArrowDownTrayIcon
                      className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      title="Download"
                    />
                  </div>
                  <div className="p-4 relative">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* NO DATA Overlay */}
                      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="font-bold text-gray-600">NO DATA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Earnings - 7 cols */}
              <div className="lg:col-span-7 pt-5 pb-8 mt-0 lg:mt-0">
                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">
                      Net Earnings (in INR)
                    </span>
                    <ArrowDownTrayIcon
                      className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      title="Download"
                    />
                  </div>
                  <div className="p-4 relative">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={areaChartData}>
                          <defs>
                            <linearGradient
                              id="colorEarnings"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#d01c68"
                                stopOpacity={0.75}
                              />
                              <stop
                                offset="95%"
                                stopColor="#d01c68"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#C0D0E0"
                          />
                          <XAxis dataKey="name" />
                          <YAxis
                            label={{
                              value: "Earnings",
                              angle: -90,
                              position: "insideLeft",
                              style: { fill: "#cdcbd0" },
                            }}
                          />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#d01c68"
                            fillOpacity={1}
                            fill="url(#colorEarnings)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                      {/* NO DATA Overlay */}
                      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="font-bold text-gray-600">NO DATA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row of Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Pageviews - 7 cols */}
              <div className="lg:col-span-7 pt-5 pb-8 lg:pb-12">
                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">Pageviews</span>
                    <ArrowDownTrayIcon
                      className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      title="Download"
                    />
                  </div>
                  <div className="p-4 relative">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={areaChartData}>
                          <defs>
                            <linearGradient
                              id="colorPageviews"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#d01c68"
                                stopOpacity={0.75}
                              />
                              <stop
                                offset="95%"
                                stopColor="#d01c68"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#C0D0E0"
                          />
                          <XAxis dataKey="name" />
                          <YAxis
                            label={{
                              value: "Page Views",
                              angle: -90,
                              position: "insideLeft",
                              style: { fill: "#cdcbd0" },
                            }}
                          />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#d01c68"
                            fillOpacity={1}
                            fill="url(#colorPageviews)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                      {/* NO DATA Overlay */}
                      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="font-bold text-gray-600">NO DATA</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center text-sm text-gray-600">
                    Last updated: today @ 12:30 AM GMT
                  </div>
                </div>
              </div>

              {/* Pageviews by Source - 5 cols */}
              <div className="lg:col-span-5 pt-5 pb-8">
                <div className="bg-white rounded-lg shadow">
                  <div className="flex justify-between items-center p-4 border-b">
                    <span className="text-lg font-semibold">
                      Pageviews by Source
                    </span>
                    <ArrowDownTrayIcon
                      className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800"
                      title="Download"
                    />
                  </div>
                  <div className="p-4 relative">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* NO DATA Overlay */}
                      <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                        <span className="font-bold text-gray-600">NO DATA</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center text-sm text-gray-600">
                    Last updated: today @ 12:30 AM GMT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
