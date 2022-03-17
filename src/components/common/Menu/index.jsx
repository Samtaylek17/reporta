// const Menu = () => {
//   const x = '';
//   return (
//     <div className="flex w-full flex-col justify-between mb-4 sm:flex-row">
//       <div className="flex flex-1 flex-col">
//         <h1 className="font-bold text-xl text-primary-1">Reports</h1>
//         <p className="text-base text-gray-1 inline-flex">
//           Easily generate a report of your transactions
//         </p>
//       </div>
//       <div className="flex flex-1 justify-end flex-col gap-y-4 gap-x-8 sm:flex-row w-full items-stretch">
//         <div className="w-full sm:w-32">
//           <Select
//             onChange={(value) => setProjectId(value)}
//             style={{ width: '100%' }}
//             dropdownClassName="bg-accent-1 text-white"
//           >
//             <Option value="">All Projects</Option>
//             {projectList.map((project) => (
//               <Option key={project.projectId} value={project.projectId}>
//                 {project.name}
//               </Option>
//             ))}
//           </Select>
//         </div>
//         <div className="w-full sm:w-32">
//           <Select
//             onChange={(value) => setGatewayId(value)}
//             style={{ width: '100%' }}
//             dropdownClassName="bg-accent-1 text-white"
//           >
//             <Option value="">All Gateways</Option>
//             {gatewayList.map((gateway) => (
//               <Option key={gateway.gatewayId} value={gateway.gatewayId}>
//                 {gateway.name}
//               </Option>
//             ))}
//           </Select>
//         </div>
//         <div className="w-full sm:w-32">
//           <DatePicker
//             onChange={(date) => setDateFrom(date)}
//             dropdownClassName="bg-accent-1 text-white"
//             className="bg-accent-1 border-0 text-white placeholder-white rounded-[5px]"
//           />
//         </div>
//         <div className="w-full sm:w-32">
//           <DatePicker
//             onChange={(date) => setDateTo(date)}
//             dropdownClassName="bg-accent-1 text-white"
//             className="bg-accent-1 border-0 text-white placeholder-white rounded-[5px]"
//           />
//         </div>
//         <div className="w-full sm:w-32">
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="bg-primary-2 h-8 w-[118px] text-white rounded-md"
//           >
//             Generate report
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
