/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import classes from './LegendStyles.scss';

export default class LegendItem extends Component {

    constructor(props) {
        super(props);
        this._onMouseClick = this._onMouseClick.bind(this);
        this._onMouseOver = this._onMouseOver.bind(this);
        this.onMouseOver = this._onMouseOver.bind(this);
    }

    /**
     * Handle Mouse click events
     * @param {*} evt Mouse Click event
     */
    _onMouseClick(evt) {
        return this.props.onClick && this.props.onClick(evt);
    }

    _onMouseOver(evt) {
        return this.props.onMouseOver && this.props.onMouseOver(evt);
    }

    _onMouseOut(evt) {
        return this.props.onMouseOut && this.props.onMouseOut(evt);
    }


    render() {
        return (
            <div
                onClick={this.props.onClick}
                onMouseOver={this.props.onMouseOver}
                onMouseOut={this.props.onMouseOut}
            >
                <span
                    className={classes.legendItemColor}
                    style={this.state.disabled ? null : { background: this.state.itemColor }}
                />
                <span>
                    LegendItem
                </span>
            </div>
        );
    }
}

LegendItem.defaultProps = {
    onClick: null,
    onMouseOver: null,
    onMouseOut: null,
};

LegendItem.propTypes = {
    onClick: PropsTypes.func,
    onMouseOver: PropsTypes.func,
    onMouseOut: PropsTypes.func,
};