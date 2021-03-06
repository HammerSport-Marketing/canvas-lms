/*
 * Copyright (C) 2014 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {shallow} from 'enzyme'
import ProgressBar from 'jsx/shared/ProgressBar'

it('sets width on progress bar', () => {
  const wrapper = shallow(<ProgressBar progress={35} />)
  expect(wrapper.find('[role="progressbar"]').prop('style').width).toBe('35%')
})

it('shows indeterminate loader when progress is 100 but not yet complete', () => {
  const wrapper = shallow(<ProgressBar progress={100} />)
  expect(wrapper.hasClass('almost-done')).toBeTruthy()
})

test('style width value never reaches over 100%', () => {
  const wrapper = shallow(<ProgressBar progress={200} />)
  expect(wrapper.find('[role="progressbar"]').prop('style').width).toBe('100%')
})
