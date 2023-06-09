import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import { getAllClinic } from '../../../services/userService';
import Slider from 'react-slick';
import { withRouter } from 'react-router';

class MedicalFacility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataClinics: []
        }
    }

    async componentDidMount() {
        let res = await getAllClinic();
        if (res && res.errCode === 0) {
            this.setState({
                dataClinics: res.data ? res.data : []
            })
        }
    }

    handleViewDetailClinics = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-clinic/${item.id}`)
        }
    }


    render() {
        let { dataClinics } = this.state;
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.specialty-popular" />
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id="homepage.more-infor" />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {dataClinics && dataClinics.length > 0 &&
                                dataClinics.map((item, index) => {
                                    return (
                                        <div
                                            className='section-customize clinic-child'
                                            key={index}
                                            onClick={() => this.handleViewDetailClinics(item)}>
                                            <div
                                                className='bg-image section-medial-facility'
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className='clinic-name'>
                                                {item.name}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));



