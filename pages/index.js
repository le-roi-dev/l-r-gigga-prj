import Head from 'next/head';
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
const regions = [
  { key: "eu", name: "Eu", img: "eu.png" },
  { key: "us", name: "US", img: "us.png" }
]

const modes = [
  { key: "FFA", name: "FFA", img: "1.svg" },
  { key: "2TDM", name: "2TDM", img: "2.svg" },
  { key: "Domination", name: "Domination", img: "4.svg" },
]

const infos = [
  { key: "about", title: "About game", content: <About /> },
  { key: "privacy", title: "Privacy Policy", content: <Privacy /> },
  { key: "terms", title: "Terms of Service", content: <Terms /> },
  { key: "changelog", title: "Change Logs History", content: <ChangeLog /> }
]

const theme = {
  checkbox: {
    styles: {
      base: {
        label: {
          color: "text-white"
        }
      }
    }
  },
  select: {
    styles: {
      base: {
        select: {
          color: "white"
        },
        menu: {
          bg: "bg-[#343a40]",
          color: "white",
          border: "border border-teal"
        },
      },
    }
  }
}
export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [region, setRegion] = useState("eu");
  const [mode, setMode] = useState("FFA");
  const [openDescModal, setOpenDescModal] = useState(false);
  const [info, setInfo] = useState({});
  const [optColors, setOptColors] = useState("classic");
  const [optBorders, setOptBorders] = useState("normal");
  const handleRegion = (key) => setRegion(key);
  const handleMode = (key) => setMode(key);
  const handleSetting = () => setOpenSetting(!openSetting);
  const handleNavDrawer = (value) => setOpenNav(value);
  const handleDescModal = (info) => {
    handleNavDrawer(false);
    setInfo(info);
    setOpenDescModal(!openDescModal)
  };


  return (
    <ThemeProvider value={theme}>
      <div className="flex justify-center items-center h-screen bg-black text-lg relative text-white">
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
          <div className='flex justify-center pb-5'>
            <img src="./images/logo.png" className='sm:w-[100px] w-[70px] h-auto' />
            <div className='flex items-center sm:text-6xl text-5xl font-bold pl-4'>
              gigga.io
            </div>
          </div>
          <div className="flex flex-row gap-4 h-[470px] px-4">
            <div className="flex-1 lg:flex hidden bg-[#343a40] rounded-lg h-full">

            </div>
            <div className="flex-1 h-full flex flex-col gap-4 w-full">
              <div className="bg-[#343a40] rounded-lg p-4 ">
                <div className='text-2xl font-bold text-center pb-4'>
                  Regions
                </div>
                <div className='flex flex-row gap-2'>
                  {
                    regions.map(r => (
                      <button
                        key={r.key}
                        onClick={() => handleRegion(r.key)}
                        className={`flex-1 flex rounded-md p-2 relative items-center hover:bg-[#74849152] border ${r.key == region ? "bg-[#74849152] border-white" : "border-transparent"}`}
                      >
                        <img src={`./images/${r.img}`} className='w-[50px] h-[30px] rounded-md' />
                        <div className='pl-2 text-lg'>{r.name}</div>
                      </button>
                    ))
                  }
                </div>
              </div>
              <div className="bg-[#343a40] rounded-lg p-4 ">
                <div className='text-2xl font-bold text-center pb-4'>
                  Gamemode
                </div>
                <div className='flex flex-row gap-2'>
                  {
                    modes.map(m => (
                      <button
                        key={m.key}
                        onClick={() => handleMode(m.key)}
                        className={`flex rounded-md p-2 relative items-center hover:bg-[#74849152] cursor-pointer border ${m.key == mode ? "bg-[#74849152] border-white" : "border-transparent"}`}
                      >
                        <img src={`./images/${m.img}`} className='w-[20px] h-[20px] rounded-md' />
                        <div className='pl-1 text-sm'>{m.name}</div>
                      </button>
                    ))
                  }
                </div>
              </div>
              <div className="flex-1 bg-[#343a40] rounded-lg flex flex-col gap-3 p-4 justify-center">
                <input class=" py-2 border-none rounded w-full px-3 bg-[#74849152] text-gray-100 leading-tight focus:outline-none" id="username" type="text" placeholder="Username" />
                <div className='flex flex-row gap-4'>
                  <button className='flex-1 bg-[#007bff] flex py-2 items-center justify-center rounded-md font-bold text-base'>
                    Play
                  </button>
                  <button className='flex-1 bg-[#ffc107] flex py-2 items-center justify-center text-[#212529] rounded-md font-bold text-base'>
                    More games
                  </button>
                </div>
                <button
                  onClick={handleSetting}
                  className='bg-[#dc3545] flex items-center justify-center py-2 rounded-md font-bold text-base'>
                  Settings
                </button>
              </div>
            </div>
            <div className="md:flex hidden flex-1 rounded-lg h-full flex-col gap-4">
              <div className='bg-[#343a40] rounded-lg p-4 '>
                <div className='text-2xl font-bold text-center pb-2'>
                  Controls
                </div>
                <div className='text-[#aaaaaa] text-base'>
                  Use W A S D to move. Aim with your mouse and shoot with space. Good Luck!
                </div>
              </div>
              <div className='flex-1 bg-[#343a40] rounded-lg  p-4'>
                <div className='text-2xl font-bold text-center pb-4'>
                  Latest Update
                </div>
                <div className='text-lg font-bold pb-2'>
                  Patch (14/05/2024): Update lol
                </div>
                <div className=''>
                  <ul className='text-[#aaaaaa] text-base list-disc pl-4'>
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
          <Link href="https://discord.gg/ZzUP88mMQZ" className='bg-[#007bff] p-4 rounded-xl'>
            <svg width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"></path>
            </svg>
          </Link>
          <Link href="https://www.reddit.com/r/giggaio/" className='bg-[#ff4400] p-4 rounded-xl'>
            <svg width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1792 1696">
              <path fill="currentColor" d="M1792 846q0 58-29.5 105.5T1683 1024q12 46 12 96q0 155-106.5 287T1298 1615.5T898 1692t-399.5-76.5t-290-208.5T102 1120q0-47 11-94q-51-25-82-73.5T0 846q0-82 58-140.5T199 647q85 0 145 63q218-152 515-162L975 27q3-13 15-21t26-5l369 81q18-37 54-59.5T1518 0q62 0 106 43.5t44 105.5t-44 106t-106 44t-105.5-43.5T1369 150l-334-74l-104 472q300 9 519 160q58-61 143-61q83 0 141 58.5t58 140.5zM418 1045q0 62 43.5 106t105.5 44t106-44t44-106t-44-105.5T567 896q-61 0-105 44t-44 105zm810 355q11-11 11-26t-11-26q-10-10-25-10t-26 10q-41 42-121 62t-160 20t-160-20t-121-62q-11-10-26-10t-25 10q-11 10-11 25.5t11 26.5q43 43 118.5 68t122.5 29.5t91 4.5t91-4.5t122.5-29.5t118.5-68zm-3-205q62 0 105.5-44t43.5-106q0-61-44-105t-105-44q-62 0-106 43.5t-44 105.5t44 106t106 44z"></path>
            </svg>
          </Link>
        </div>
        <div
          className='absolute top-10 left-0  py-2 px-10 font-bold bg-[#74849152] rounded-tr-full rounded-br-full cursor-pointer'
          onClick={() => handleNavDrawer(true)}
        >
          More
        </div>
        <Drawer open={openNav} onClose={() => handleNavDrawer(false)} className="p-4 bg-[#343a40] ">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="white">
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
              infos.map(info => (
                <div
                  onClick={() => handleDescModal(info)}
                  className='hover:bg-[#74849152] px-3 py-2 cursor-pointer rounded-md'
                >
                  {info.title}
                </div>
              ))
            }
          </div>
        </Drawer>
        <Dialog open={openDescModal} handler={handleDescModal} className='bg-[#343a40]'>
          <DialogHeader className='text-white flex items-center justify-between pb-0'>
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

        <Dialog open={openSetting} handler={handleSetting} className='bg-[#343a40]'>
          <DialogHeader className='flex items-center justify-between pb-0 text-white'>
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
          <DialogBody className='max-h-[700px] text-white'>
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
            <div className='grid grid-cols-2 mt-4' color='white'>
              <Checkbox color="teal" label="Screenshot Mode" />
              <Checkbox color="teal" label="Classic Traps" />
              <Checkbox color="teal" label="Low Graphics" />
              <Checkbox color="teal" label="Disable Hyperactivity" />
              <Checkbox color="teal" label="Colord Health Bars" />
            </div>
            <div className='px-3 py-2'>
              <Input label="Your token" color='white' />
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
