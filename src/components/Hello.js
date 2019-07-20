import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {

  render() {

    console.log(this.props.heading);

    return (
      <section id = "hello">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">

              <article>
                <figure>
                  <img src = {this.props.avatar} alt="Me"/>
                </figure>

                <h3 className = "color-change text-center">{this.props.heading}</h3>
                <p className = "text-center hello-desc">{this.props.desc}</p>

              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

Hello.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
  avatar: PropTypes.string,
}

export default Hello;
