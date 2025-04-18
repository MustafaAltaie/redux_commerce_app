import { useState } from "react";
import { useCreatePromoCodeMutation, useReadPromoCodeQuery, useDeletePromoCodeMutation } from "../../../features/productApi";

const DashboardSettingsMenu = () => {
    const [promoTxtBtn, setPromoTxtBtn] = useState(false);
    const [promoText, setPromoText] = useState('');
    const [discount, setDiscount] = useState('');
    const [date, setDate] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [promoList, setPromoList] = useState(false);
    const [deleted, setDeleted] = useState('');
    const [createPromoCode] = useCreatePromoCodeMutation();
    const { data, isLoading } = useReadPromoCodeQuery();
    const [deletePromoCode] = useDeletePromoCodeMutation();

    if(isLoading) return;

    const handleCreateNewPromoCode = () => {
      const newPromo = {
        promoCode: promoText,
        discount: discount,
        expiresAt: date,
        isActive: isActive
      }
      createPromoCode(newPromo);
      setPromoTxtBtn(false);
      setPromoText('');
      setDiscount('');
      setDate('');
      setIsActive(true);
    }

    const handleRemovePromo = (id) => {
      if(confirm ('Confirm deleting promo-code?')){
        deletePromoCode(id);
      }
    }

    return (
      <div className="dashboardSettingsMenu">
        {/* Create new promo-code */}
        <p onClick={() => setPromoTxtBtn(!promoTxtBtn)} className="dashboardSettingsMenuOption">Add new promo-code</p>
        <div>
          {promoTxtBtn &&
          <input type="text" value={promoText} placeholder="promo-code" onChange={e => setPromoText(e.target.value)} className="dashboardSettingsMenuOption" />}
          {promoText && promoTxtBtn &&
          <input type="number" value={discount} placeholder="Discount" onChange={e => setDiscount(e.target.value)} className="dashboardSettingsMenuOption" />}
          {promoText && discount && promoTxtBtn &&
          <input type="date" value={date} placeholder="Expiration" onChange={e => setDate(e.target.value)} className="dashboardSettingsMenuOption" />}
          {promoText && discount && date && promoTxtBtn &&
          <div className="dashboardSettingsMenuOption">
            <input type="checkbox" id='isPromoCodeActive' checked={isActive} onChange={e => setIsActive(e.target.checked)}  className="dashboardSettingsMenuOption"/>
            <label htmlFor="isPromoCodeActive" className="dashboardSettingsMenuOption">Active</label>
          </div>}
          {promoText && discount && date && promoTxtBtn &&
          <button className="dashboardSettingsMenuOption" onClick={handleCreateNewPromoCode}>Add</button>}
        </div>
          {/* Show stored promo-codes */}
        <p className="dashboardSettingsMenuOption" onClick={() => setPromoList(!promoList)}>Show stored promo-codes</p>
        {data.length > 0 && promoList &&
        <div className="dashboardSettingsMenuOption" id='promoCodeCartWrapper'>
          {data.map(promo =>
          <div key={promo.promoCode} className='promoCodeContainer' onClick={() => {handleRemovePromo(promo._id); setDeleted(promo._id)}} style={{ opacity: promo._id === deleted ? 0 : 1 }}>
            <div className="promoCode">
                <div className="promoCodeInnerFrame">
                    <h6>{promo.discount}% discount</h6>
                    <h5>{promo.promoCode}</h5>
                    <h6>Harry up! Valid until {new Date(promo.expiresAt).toLocaleDateString()}</h6>
                </div>
            </div>
          </div>
          )}
        </div>}
      </div>
    )
}

export default DashboardSettingsMenu;