/* eslint-disable no-console */

import React from 'react'
import './index.scss'

import MoleculeInputTags, {
  inputSizes
} from '../../../../components/molecule/inputTags/src'

import {withStateValueTags} from '@s-ui/hoc'
import {CloseIcon} from './icons'
import {beatles, ledZeppelin, queen} from './data'

const BASE_CLASS_DEMO = 'DemoMoleculeInputTags'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`

const MoleculeInputTagsWithState = withStateValueTags(MoleculeInputTags)

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <h1>Input tags</h1>
      <p>
        Check the console to verify the <code>onChangeTags</code> on
        adding/removing tabs
      </p>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Basic</h4>
        <MoleculeInputTagsWithState
          name="inputTagsBeatles1"
          value="George Martin"
          tagsCloseIcon={<CloseIcon />}
          tags={beatles}
          onChangeTags={(_, {tags, name}) => {
            console.log({[`onChangeTags___${name}`]: tags})
          }}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Entering tags on "Tab" press</h4>
        <MoleculeInputTagsWithState
          name="inputTagsBeatles2"
          value="George Martin"
          tagsCloseIcon={<CloseIcon />}
          tags={beatles}
          onEnterKey="Tab"
          onChangeTags={(_, {tags, name}) => {
            console.log({[`onChangeTags___${name}`]: tags})
          }}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>Entering tags on "comma" press</h4>
        <MoleculeInputTagsWithState
          name="inputTagsBeatles3"
          value="George Martin"
          tagsCloseIcon={<CloseIcon />}
          tags={beatles}
          onEnterKey=","
          onChangeTags={(_, {tags, name}) => {
            console.log({[`onChangeTags___${name}`]: tags})
          }}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>With size=SMALL</h4>
        <MoleculeInputTagsWithState
          name="inputTagsBeatles4"
          tagsCloseIcon={<CloseIcon />}
          tags={ledZeppelin}
          size={inputSizes.SMALL}
          onChangeTags={(_, {tags, name}) => {
            console.log({[`onChangeTags___${name}`]: tags})
          }}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>With error</h4>
        <MoleculeInputTagsWithState
          name="inputTagsBeatles5"
          tagsCloseIcon={<CloseIcon />}
          tags={queen}
          errorState
          onChangeTags={(_, {tags, name}) => {
            console.log({[`onChangeTags___${name}`]: tags})
          }}
        />
      </div>
      <div className={CLASS_DEMO_SECTION}>
        <h4>With onChange handler</h4>
        <MoleculeInputTagsWithState
          name="inputTagsBeatles6"
          tagsCloseIcon={<CloseIcon />}
          tags={queen}
          onChange={(_, valuesToPropagate) => {
            const {name, value} = valuesToPropagate
            console.log({[`onChange___${name}`]: value})
          }}
          onChangeTags={(_, valuesToPropagate) => {
            const {name, tags} = valuesToPropagate
            console.log({[`onChangeTags___${name}`]: tags})
          }}
        />
      </div>
    </div>
  </div>
)

export default Demo
