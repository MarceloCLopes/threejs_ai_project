import { useSnapshot } from 'valtio'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { state } from '../store'
import { download } from '../assets'
import config from '../config/config'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants'

import { Tab } from '../components/Tab'
import { CustomButtom } from '../components/CustomButtom'

export const Costumizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="top-0 left-0 z-10 absolute"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div
                className="glassmorphism w-16 border-[2px] rounded-lg flex flex-col 
              justify-center items-center ml-1 py-4 gap-4 tabs"
              >
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButtom
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="absolute z-10 bottom-5 right-0 left-0 w-full flex 
          justify-center items-center flex-wrap gap-4"
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
