import React, { Component} from 'react'
import PropTypes from 'prop-types'
import isUndefined from 'lodash/isUndefined'

import Key from '../forms/Key'
import UriPath from '../forms/UriPath'
import UriPrefix from '../forms/UriPrefix'

const Form = ({ config, element, updateElement }) => {

  return (
    <div className="row mt-10">
      <div className="col-sm-6">
        <UriPrefix config={config} element={element} onChange={updateElement} />
      </div>
      <div className="col-sm-6">
        {
          isUndefined(element.uri_path) ? <Key config={config} element={element} onChange={updateElement} />
                                        : <UriPath config={config} element={element} onChange={updateElement} />
        }
      </div>
    </div>
  )
}

Form.propTypes = {
  config: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
  updateElement: PropTypes.func.isRequired
}

export default Form
