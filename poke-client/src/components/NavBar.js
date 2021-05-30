/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


// const navigation = ['All Pokemons', 'My Pokemon Lists']
const navigation = [
  {name: 'All Pokemons', href: '/', current: true},
  {name: 'My Pokemon Lists', href: '/', current: false}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavBar () {
  return (
    <div >
      <Disclosure as="nav" className="bg-gray-800 ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={itemIdx}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Link to={item.name === 'All Pokemons' ? `/` : `/MyPokemonLists`}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium', item.current = false
                            )}
                            >
                              {item.name}
                            </Link>
                          </Fragment>
                        ) : (
                          <Link
                            key={itemIdx}
                            aria-current={item.current ? 'page' : undefined}
                            to={item.name === 'All Pokemons' ? `/` : `/MyPokemonLists`}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={itemIdx}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <Link to={item.name === 'All Pokemons' ? `/` : `/MyPokemonLists`}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium', item.current = false
                      )}
                      >
                        {item.name}
                      </Link>
                    </Fragment>
                  ) : (
                    <Link
                      key={itemIdx}
                      aria-current={item.current ? 'page' : undefined}
                      to={item.name === 'All Pokemons' ? `/` : `/MyPokemonLists`}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}