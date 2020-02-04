package com.cmap.rest.webservices.cmaprestfulwebservices.topic;

public class Topic {
	private String bokRef;
	private String area;
	private String unit;
	private String id;
	private String topic;

	private static final String[] BLOOMS_LVL = { "Remembering", "Understanding", "Applying", "Analyzing", "Evaluating",
			"Creating" };
	
	private String preReqLvl;
	private String outcomeLvl;

	public Topic(String bokRef, String area, String unit, String id, String topic, String preReqLvl,
			String outcomeLvl) {
		this.bokRef = bokRef;
		this.area = area;
		this.unit = unit;
		this.id = id;
		this.topic = topic;
		this.preReqLvl = preReqLvl;
		this.outcomeLvl = outcomeLvl;
	}

	public String getPreReqLvl() {
		return preReqLvl;
	}

	public boolean isLvlValid(String lvl) {
		for (int i = 0; i < BLOOMS_LVL.length; i++) {
			if (lvl != BLOOMS_LVL[i]) {
				return false;
			}
		}
		return true;
	}

	public void setPreReqLvl(String preReqLvl) {
		boolean isValid = isLvlValid(preReqLvl);

		if (isValid == true) {
			this.preReqLvl = preReqLvl;
		} else {
			this.preReqLvl = null;
		}
	}

	public String getOutcomeLvl() {
		return outcomeLvl;
	}

	public void setOutcomeLvl(String outcomeLvl) {
		boolean isValid = isLvlValid(outcomeLvl);

		if (isValid == true) {
			this.outcomeLvl = outcomeLvl;
		} else {
			this.outcomeLvl = null;
		}
	}

	public String getBokRef() {
		return bokRef;
	}

	public String getArea() {
		return area;
	}

	public String getUnit() {
		return unit;
	}

	public String getId() {
		return id;
	}

	public String getTopic() {
		return topic;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Topic other = (Topic) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
