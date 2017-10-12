import React, { Component } from 'react';
import { Icon, Text, Item, Input as NInput } from 'react-native-elements';

import { Field } from "redux-form";

export default class Input extends Component {
    renderInput({
        input,
        label,
        type,
        meta: { touched, error, warning },
        inputProps,
        icon
      }) {
        var hasError = false;
        if (error !== undefined) {
          hasError = true;
        }
        return (
          <Item error={hasError}>
            <Icon active name={icon} />
            <NInput
              placeholder={label}
              {...input}
            />
            {hasError
              ? <Item style={{ borderColor: "transparent" }}>
                  <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
                  <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
                </Item>
              : <Text />}
          </Item>
        );
    }
    
    render() {
      return (
        <Field name={this.props.name} label={this.props.label} icon={this.props.icon} component={this.renderInput} />
      );
    }
  }