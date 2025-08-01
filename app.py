import streamlit as st
from modules.govscore import calculate_govscore
from modules.chatbot import get_bot_response
import json

# --- Load scheme data ---
with open("data/schemes.json") as f:
    scheme_data = json.load(f)

# --- App Setup ---
st.set_page_config(page_title="GovConnect+", layout="centered")
st.title("GovConnect+ : MSME Compliance & AI Assistant")
st.caption("Empowering MSMEs with clarity, compliance & confidence")

# --- Tabs for Navigation ---
tab1, tab2 = st.tabs(["📊 GovScore Checker", "💬 AI Assistant"])

# ================= GovScore Tab =================
with tab1:
    st.header("Check Your MSME Compliance Health (GovScore)")

    st.write("Fill out a few details to get your GovScore and personalized suggestions.")

    col1, col2 = st.columns(2)

    with col1:
        gst = st.checkbox("Registered for GST")
        udyam = st.checkbox("Udyam Registration")
        trade_license = st.checkbox("Trade License")

    with col2:
        pollution_noc = st.checkbox("Pollution NOC")
        esi_pf = st.checkbox("ESI / PF Registered")
        exports = st.checkbox("Exports Products")

    if st.button("Calculate GovScore"):
        input_data = {
            "gst": gst,
            "udyam": udyam,
            "trade_license": trade_license,
            "pollution_noc": pollution_noc,
            "esi_pf": esi_pf,
            "exports": exports
        }

        score, suggestions = calculate_govscore(input_data)
        st.subheader(f"Your GovScore: {score}/100")

        if score >= 80:
            st.success("✅ Status: Compliant")
        elif score >= 50:
            st.warning("⚠️ Status: Needs Action")
        else:
            st.error("🚨 Status: Non-Compliant")

        st.markdown("### 📋 Recommendations:")
        for item in suggestions:
            st.write(f"- {item}")

# ================= AI Assistant Tab =================
with tab2:
    st.header("Ask Anything About Schemes, Licenses, or MSME Setup")
    user_query = st.text_input("Your Question:", placeholder="e.g. What licenses do I need for a textile unit in Delhi?")

    if st.button("Ask") and user_query.strip() != "":
        with st.spinner("Thinking..."):
            response = get_bot_response(user_query, scheme_data)
        st.markdown("#### 🤖 GovBot Says:")
        st.write(response)

# ================= Footer =================
st.divider()
st.caption("Built with ❤️ by Team GovConnect+ for Industrial Ideathon 2025")
