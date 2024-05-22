import Link from 'next/link'
import {
  ThemeProvider,
  Drawer,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Option,
  Checkbox,
  Input,
  Select,
  checkbox,
  collapse,
  select
} from "@material-tailwind/react";
import { useState } from 'react';
import About from "../components/About";
import Terms from "../components/Terms";
import Privacy from "../components/Privacy";
import ChangeLog from "../components/ChangeLog";
import Controls from "../components/Controls";
const regions = [
  { key: "EU", name: "EU", img: "eu.png" },
  { key: "US", name: "US", img: "us.png" }
]

const modes = [
  { key: "FFA", name: "FFA", img: "1.svg" },
  { key: "2TDM", name: "2TDM", img: "2.svg" },
  { key: "Domination", name: "Domination", img: "4.svg" },
]

const infos = [
  { key: "about", mobile: false, title: "About game", content: <About /> },
  { key: "privacy", mobile: false, title: "Privacy Policy", content: <Privacy /> },
  { key: "terms", mobile: false, title: "Terms of Service", content: <Terms /> },
  { key: "changelog", mobile: false, title: "Change Logs History", content: <ChangeLog /> },
  { key: "controls", mobile: true, title: "Controls", content: <Controls /> }
]

const theme = {
  checkbox: {
    styles: {
      base: {
        label: {
          color: "text-blue-gray-900"
        }
      }
    }
  },
  // select: {
  //   styles: {
  //     base: {
  //       select: {
  //         color: "blue-gray-900"
  //       },
  //       menu: {
  //         bg: "bg-blue-gray-50",
  //         color: "blue-gray-900",
  //         border: "border border-teal"
  //       },
  //     },
  //   }
  // }
}
const maxNum = 80;
const servers = [
  { key: "1", region: "US", name: "Clan Wars", number: 0 },
  { key: "2", region: "US", name: "Arms Race Maze 2TDM", number: 10 },
  { key: "3", region: "US", name: "Assault Trenches", number: 0 },
  { key: "4", region: "US", name: "Outbreak Maze Squads", number: 20 },
  { key: "5", region: "US", name: "Old Dreadnoughts 2TDM", number: 0 },
  { key: "6", region: "US", name: "Growth Arms Race 2TDM", number: 30 },
  { key: "7", region: "US", name: "Nexus", number: 10 },
  { key: "8", region: "US", name: "4TDM", number: 0 },
  { key: "9", region: "US", name: "Squads", number: 0 },
  { key: "10", region: "US", name: "Siege Blitz", number: 30 },
  { key: "11", region: "US", name: "Arms Race Grudge Ball", number: 0 },
  { key: "12", region: "US", name: "Dreadnoughts", number: 0 },
  { key: "13", region: "US", name: "Maze", number: 0 },
  { key: "14", region: "US", name: "Growth Arms Race Maze", number: 20 },
  { key: "15", region: "EU", name: "Arms Race Maze", number: 10 },
  { key: "16", region: "EU", name: "2TDM", number: 30 },
  { key: "17", region: "EU", name: "Maze 4TDM", number: 0 },
  { key: "18", region: "EU", name: "Assault Stronghold", number: 20 },
  { key: "19", region: "EU", name: "Manhunt", number: 50 },
  { key: "20", region: "EU", name: "Old Dreadnoughts 2TDM", number: 0 },
  { key: "21", region: "EU", name: "Maze", number: 0 },
  { key: "22", region: "EU", name: "Open Maze 2TDM", number: 30 },
  { key: "23", region: "EU", name: "Siege Blitz", number: 10 },
  { key: "24", region: "EU", name: "Arms Race Magic Maze", number: 0 },
  { key: "25", region: "EU", name: "Nexus", number: 20 },
]
export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openSkype, setOpenSkype] = useState(false);
  const [region, setRegion] = useState("EU");
  const [server, setServer] = useState(servers[0].key);
  const [mode, setMode] = useState("FFA");
  const [openDescModal, setOpenDescModal] = useState(false);
  const [info, setInfo] = useState({});
  const [optColors, setOptColors] = useState("classic");
  const [optBorders, setOptBorders] = useState("normal");
  const handleServer = (key) => setServer(key);
  const handleRegion = (key) => {
    setServer('');
    setRegion(key)
  };
  const handleMode = (key) => setMode(key);
  const handleSkype = () => setOpenSkype(!openSkype);
  const handleSetting = () => setOpenSetting(!openSetting);
  const handleNavDrawer = (value) => setOpenNav(value);
  const handleDescModal = (info) => {
    handleNavDrawer(false);
    setInfo(info);
    setOpenDescModal(!openDescModal)
  };

  return (
    <ThemeProvider value={theme}>
      <div className="flex justify-center items-center h-screen bg-blue-gray-100 text-lg relative text-blue-gray-900">
        <div className=''>
          <div className='flex justify-center pb-5'>
            <img src="./images/logo.png" className='sm:w-[100px] w-[70px] h-auto' />
            <div className='flex items-center sm:text-6xl text-5xl font-bold pl-4 text-blue-gray-800'>
              gigga.io
            </div>
          </div>
          <div className="flex flex-row gap-3 h-[390px]">
            <div className="drop-shadow-2xl w-[350px] h-full lg:flex flex-col hidden bg-blue-gray-50 rounded-lg justify-center items-center text-3xl text-[#8c8c8c] p-2">
              <div className='flex-1 w-full flex justify-center items-center'>Ads</div>
              <div className='flex flex-row gap-2 w-full'>
                <button
                  onClick={handleSetting}
                  className='flex-1 bg-[#dc3545] hover:bg-[#b62937] duration-500 flex items-center justify-center py-2 rounded-md font-bold text-base text-blue-gray-50 gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                  </svg>
                  Settings
                </button>
                <button className='flex-1 bg-[#ffc107] hover:bg-[#e1a900] duration-500 flex py-2 items-center justify-center text-blue-gray-900 rounded-md font-bold text-base'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                  </svg>
                  More games
                </button>
              </div>
            </div>
            <div className="drop-shadow-2xl w-[350px] h-full flex flex-col gap-3">
              <div className="bg-blue-gray-50 rounded-lg p-4 flex flex-col gap-2 overflow-auto">
                <div className='flex flex-row gap-2'>
                  {
                    regions.map(r => (
                      <button
                        key={r.key}
                        onClick={() => handleRegion(r.key)}
                        className={`duration-500 flex-1 flex rounded-md px-2 py-1 relative items-center hover:bg-blue-gray-900 hover:text-blue-gray-50 ${r.key == region ? "bg-blue-gray-900 text-blue-gray-50" : ""}`}
                      >
                        <img src={`./images/${r.img}`} className='w-[40px] h-[25px] rounded' />
                        <div className='pl-2 text-lg'>{r.name}</div>
                      </button>
                    ))
                  }
                </div>
                <div className='flex flex-row gap-2 items-content'>
                  {
                    modes.map(m => (
                      <button
                        key={m.key}
                        onClick={() => handleMode(m.key)}
                        className={`duration-500 flex rounded-md px-2 py-1 relative items-center hover:bg-blue-gray-900 hover:text-blue-gray-50 ${m.key == mode ? "bg-blue-gray-900 text-blue-gray-50" : ""}`}
                      >
                        <img src={`./images/${m.img}`} className='w-[20px] h-[20px] rounded-md' />
                        <div className='pl-1 text-sm'>{m.name}</div>
                      </button>
                    ))
                  }
                </div>
                <div className='text-sm overflow-auto flex flex-col gap-1'>
                  {
                    servers.filter(s => s.region == region).map(s => (
                      <button
                        onClick={() => handleServer(s.key)}
                        className={`flex duration-500 gap-1 p-1 rounded-md hover:bg-blue-gray-900 hover:text-blue-gray-50 ${server == s.key ? 'bg-blue-gray-900 text-blue-gray-50' : ''}`}>
                        <div className='px-2'>{s.region}</div>
                        <div className='flex-1'>{s.name}</div>
                        <div className=''>{s.number}/{maxNum}</div>
                      </button>
                    ))
                  }
                </div>
              </div>
              <div className="bg-blue-gray-50 rounded-lg flex flex-col gap-2 p-2 justify-center">
                <Input label="User name" id="username" color='blue-gray-900' />
                <div className='flex flex-row gap-2'>
                  <button className='flex-1 bg-[#007bff] hover:bg-[#006ada] text-blue-gray-50 duration-500 flex py-2 items-center justify-center rounded-md font-bold text-base gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                    Play
                  </button>
                </div>
              </div>
            </div>
            <div className="drop-shadow-2xl w-[350px] h-full md:flex hidden rounded-lg h-full flex-col gap-4">
              <div className='bg-blue-gray-50 rounded-lg p-4 '>
                <div className='text-2xl font-bold text-center pb-2'>
                  Controls
                </div>
                <div className='text-blue-gray-700 text-base'>
                  Use W A S D to move. Aim with your mouse and shoot with space. Good Luck!
                </div>
              </div>
              <div className='flex-1 flex flex-col bg-blue-gray-50 rounded-lg p-4'>
                <div className='text-2xl font-bold text-center pb-4'>
                  Latest Update
                </div>
                <div className='text-lg font-bold pb-2'>
                  Patch (14/05/2024): Update lol
                </div>
                <div className='flex-1'>
                  <ul className='text-blue-gray-700 text-base list-disc pl-4'>
                    <li>Bug fixes</li>
                    <li>Small redesignes to Domination mode</li>
                    <li>Implementation of new features</li>
                    <li>New boss</li>
                    <li>More!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute flex flex-col gap-4 bottom-4 right-4'>
          <button
            className='bg-blue-gray-50 p-4 rounded-xl drop-shadow-2xl quadrado'
            onClick={handleSkype}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
              <path fill="#174ba8" d="M16 4A12 12 0 1 0 16 28A12 12 0 1 0 16 4Z"></path><path fill="#146ce8" d="M32 20A12 12 0 1 0 32 44A12 12 0 1 0 32 20Z"></path><path fill="#30a6ff" d="M24 6A18 18 0 1 0 24 42A18 18 0 1 0 24 6Z"></path><path fill="#fff" d="M16.97,31.316c0-1.037,1.089-1.624,1.832-1.624c0.743,0,2.816,1.451,4.803,1.451 c1.054,0,3.421-0.103,3.421-2.29c0-3.585-10.115-3.308-10.115-9.274c0-1.038,0.285-5.795,7.784-5.795 c2.016,0,5.71,0.577,5.71,2.493c0,1.406-0.958,1.769-1.6,1.769c-1.244,0-1.745-1.123-4.285-1.123c-3.508,0-3.421,2.102-3.421,2.408 c0,3.017,10.073,3.017,10.073,9.255c0,6.141-7.491,5.814-8.58,5.814C21.474,34.4,16.97,33.856,16.97,31.316z"></path>
            </svg>
            {/* <div className='text-blue-900 text-sm'>live:.cid.9aa530fa16e609c6</div> */}
          </button>
          <Link href="https://discord.gg/ZzUP88mMQZ" className='bg-[#007bff] p-4 rounded-xl text-blue-gray-50 drop-shadow-2xl'>
            <svg width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"></path>
            </svg>
          </Link>

          <Link href="https://www.reddit.com/r/giggaio/" className='bg-[#ff4400] p-4 rounded-xl text-blue-gray-50 drop-shadow-2xl'>
            <svg width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1696">
              <path fill="currentColor" d="M1792 846q0 58-29.5 105.5T1683 1024q12 46 12 96q0 155-106.5 287T1298 1615.5T898 1692t-399.5-76.5t-290-208.5T102 1120q0-47 11-94q-51-25-82-73.5T0 846q0-82 58-140.5T199 647q85 0 145 63q218-152 515-162L975 27q3-13 15-21t26-5l369 81q18-37 54-59.5T1518 0q62 0 106 43.5t44 105.5t-44 106t-106 44t-105.5-43.5T1369 150l-334-74l-104 472q300 9 519 160q58-61 143-61q83 0 141 58.5t58 140.5zM418 1045q0 62 43.5 106t105.5 44t106-44t44-106t-44-105.5T567 896q-61 0-105 44t-44 105zm810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20t-160-20t-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5t91 4.5t91-4.5t122.5-29.5t118.5-68zm-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5t44 106t106 44z"></path>
            </svg>
          </Link>

        </div>
        <div
          className='drop-shadow-2xl absolute top-10 left-0  py-2 px-6 font-bold bg-blue-gray-50 text-blue-gray-900 rounded-tr-full rounded-br-full cursor-pointer flex gap-3'
          onClick={() => handleNavDrawer(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
          </svg>
          More
        </div>
        <Drawer open={openNav} onClose={() => handleNavDrawer(false)} className="p-4 bg-blue-gray-50 ">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray-900" className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
              More
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={() => handleNavDrawer(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex flex-col gap-2">
            {
              infos.filter(info => !info.mobile).map(info => (
                <div
                  onClick={() => handleDescModal(info)}
                  className='hover:bg-blue-gray-100 duration-500 px-3 py-2 cursor-pointer rounded-md'
                >
                  {info.title}
                </div>
              ))
            }
            {
              infos.filter(info => info.mobile).map(info => (
                <div
                  onClick={() => handleDescModal(info)}
                  className='block md:hidden duration-500 hover:bg-[#74849152] px-3 py-2 cursor-pointer rounded-md'
                >
                  {info.title}
                </div>
              ))
            }
            <div
              onClick={() => handleSetting()}
              className='block md:hidden duration-500 hover:bg-[#74849152] px-3 py-2 cursor-pointer rounded-md'
            >
              Setting
            </div>
            <div
              className='block md:hidden duration-500 hover:bg-[#74849152] px-3 py-2 cursor-pointer rounded-md'
            >
              More games
            </div>
          </div>
        </Drawer>
        <Dialog open={openDescModal} handler={handleDescModal} className='bg-blue-gray-50'>
          <DialogHeader className='text-blue-gray-900 flex items-center justify-between pb-0'>
            <div>{info.title}</div>
            <IconButton variant="text" color="blue-gray" onClick={handleDescModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </DialogHeader>
          <DialogBody className='max-h-[700px] overflow-auto'>
            {info.content}
          </DialogBody>
        </Dialog>

        <Dialog open={openSetting} handler={handleSetting} className='bg-blue-gray-50'>
          <DialogHeader className='flex items-center justify-between pb-0 text-blue-gray-900'>
            <div>Advanced Controls</div>
            <IconButton variant="text" color="blue-gray" onClick={handleSetting}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </DialogHeader>
          <DialogBody className='max-h-[700px] text-blue-gray-900'>
            <div className='px-3 grid grid-cols-2 gap-4'>
              <div className='flex gap-1'>
                <div>E:</div>
                <div>auto-fire</div>
              </div>
              <div className='flex gap-1'>
                <div>C:</div>
                <div>auto-spin</div>
              </div>
              <div className='flex gap-1'>
                <div>R:</div>
                <div>disable auto-weapons</div>
              </div>
              <div className='flex gap-1'>
                <div>N:</div>
                <div>level-up(sandbox)</div>
              </div>
            </div>
            <div className='px-3 flex md:flex-row flex-col gap-4 justify-center mt-4'>
              <div className='pt-2'>Options</div>
              <Select
                label="Select"
                color="teal"
                value={optColors}
                onChange={(val) => setOptColors(val)}
              >
                <Option value='normal'>Light Colors</Option>
                <Option value='dark'>Dark Colors</Option>
                <Option value='natural'>Natural</Option>
                <Option value='classic'>Classic</Option>
                <Option value='forest'>Forest (Fan-made)</Option>
                <Option value='midnight'>Midenight (Fan-made)</Option>
                <Option value='pastel'>Snow (Fan-made)</Option>
                <Option value='ocean'>Coral Reef (Fan-made)</Option>
                <Option value='badlands'>Badlands (Fan-made)</Option>
                <Option value='bleach'>Bleach (Fan-made)</Option>
              </Select>
              <Select
                label="Select"
                color="teal"
                value={optBorders}
                onChange={(val) => setOptBorders(val)}
              >
                <Option value='normal'>Soft Borders</Option>
                <Option value='dark'>Dark Borders</Option>
                <Option value='neon'>Neon Mode</Option>
                <Option value='glass'>Glass Mode</Option>
              </Select>
            </div>
            <div className='grid grid-cols-2 mt-4' color='blue-gray-900'>
              <Checkbox color="teal" label="Screenshot Mode" />
              <Checkbox color="teal" label="Classic Traps" />
              <Checkbox color="teal" label="Low Graphics" />
              <Checkbox color="teal" label="Disable Hyperactivity" />
              <Checkbox color="teal" label="Colord Health Bars" />
            </div>
            <div className='px-3 py-2'>
              <Input label="Your token" color='blue-gray-900' />
            </div>
          </DialogBody>
        </Dialog>

        <Dialog open={openSkype} handler={handleSkype} size='xs' className='bg-blue-gray-50'>
          <DialogHeader className='flex items-center justify-between pb-0 text-blue-gray-900'>
            <div>Contact me</div>
            <IconButton variant="text" color="blue-gray" onClick={handleSkype}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </DialogHeader>
          <DialogBody className='max-h-[700px] text-blue-gray-900'>
            <div className='px-4 pb-4 flex flex-col gap-1'>
              <div>
                Hi Zubair. I am Oleksandr K.
              </div>
              <div>
                I am sorry for not responding to your message.
              </div>
              <div>
                There are some issues with my Upwork account.
              </div>
              <div>
                Please contact me via Skype
              </div>
            </div>
            <div className='flex items-center justify-between px-4'>
              <div className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#174ba8" d="M16 4A12 12 0 1 0 16 28A12 12 0 1 0 16 4Z"></path><path fill="#146ce8" d="M32 20A12 12 0 1 0 32 44A12 12 0 1 0 32 20Z"></path><path fill="#30a6ff" d="M24 6A18 18 0 1 0 24 42A18 18 0 1 0 24 6Z"></path><path fill="#fff" d="M16.97,31.316c0-1.037,1.089-1.624,1.832-1.624c0.743,0,2.816,1.451,4.803,1.451 c1.054,0,3.421-0.103,3.421-2.29c0-3.585-10.115-3.308-10.115-9.274c0-1.038,0.285-5.795,7.784-5.795 c2.016,0,5.71,0.577,5.71,2.493c0,1.406-0.958,1.769-1.6,1.769c-1.244,0-1.745-1.123-4.285-1.123c-3.508,0-3.421,2.102-3.421,2.408 c0,3.017,10.073,3.017,10.073,9.255c0,6.141-7.491,5.814-8.58,5.814C21.474,34.4,16.97,33.856,16.97,31.316z"></path>
                </svg>
                Skype Name
              </div>
              <div>live:.cid.9aa530fa16e609c6</div>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
