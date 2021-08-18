import React from 'react'
import './Packages.css'

const Packages = () => {
    return (
        <>
            <h1>Packages & Plans</h1>
            <div className="main_packages">
                <div className="basic_membership">
                    Basic Membership
            <hr />
                    <br />
                    <div className="pay">
                        Pay as You Go
            </div>
                    <br />
                    <div className="Refundable">
                        Refundable Deposit
            </div>
                    <div className="text_deposits">
                        <div className="img_deposit">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="deposit_required">
                            <h3>Deposit Required</h3>
                        </div>
                        <div className="img_charge_rental">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="charge_per_rental">
                            <h3>Charge Per Rental</h3>
                        </div>
                        <div className="img_referral">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="img_referral">
                            <h3>Referral Program</h3>
                        </div>
                        <div className="img_credit">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="creadit">
                            <h3>We accept major Credit cards , Debit cards Net Banking ,Mobile wallets and UPI.</h3>
                        </div>
                    </div>

                </div>
                <div className="preminum_membership">
                    Premium Membership
            <hr />
                    <div className="dropdown_membership">
                        <select name="" id="" defaultValue="">
                            <option value="Annual">Annual</option>
                            <option value="Quaterly">Quaterly</option>
                        </select>
                    </div>
                    <div className="premium_text">
                        <div className="one_time">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="one_payment">
                            <h3>One time Payment required</h3>
                        </div>
                        <div className="unlimited_img">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="unlimited_text">
                            <h3>Unlimited swapping for 90 days!</h3>
                        </div>
                        <div className="img_complimentary">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="img_complimentary">
                            <h3>Complimentary Vouchers from merchants all over india</h3>
                        </div>
                        <div className="img_refferal">
                            <img src="https://plugo.io/wp-content/uploads/2018/12/pricing-list-icon.svg" alt="" />
                        </div>
                        <div className="Referral">
                            <h3>Referral Program</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Packages
