export interface OfferParams {
    locale: string,
    email: string,
    item_code: string,
    coupon: string,
    sale_agent_id: string,
}


export interface HasOfferParams {
    transaction_id: string;
    goal: string;
    aff_id: string;
    offer_id: string;
    coupon?: string;
    promo?: string;
    ho_transaction_id: string;
    ho_goal_type: string;
    ho_aff_id: string;
    ho_offer_id: string;
}