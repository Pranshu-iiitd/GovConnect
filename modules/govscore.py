def calculate_govscore(inputs):
    score = 0
    suggestions = []

    if inputs.get("gst"):
        score += 20
    else:
        suggestions.append("Register for GST to enable tax compliance and scheme eligibility.")

    if inputs.get("udyam"):
        score += 20
    else:
        suggestions.append("Get Udyam Registration to be officially recognized as an MSME.")

    if inputs.get("trade_license"):
        score += 15
    else:
        suggestions.append("Apply for a Trade License from your local authority.")

    if inputs.get("pollution_noc"):
        score += 15
    else:
        suggestions.append("If applicable, secure Pollution NOC from DPCC.")

    if inputs.get("esi_pf"):
        score += 15
    else:
        suggestions.append("Register for ESI/PF if employing staff to remain compliant.")

    if inputs.get("exports"):
        score += 15
    else:
        suggestions.append("Consider export registration under DGFT to expand your market.")

    return score, suggestions
