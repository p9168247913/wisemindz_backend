'use strict';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
	const School = sequelize.define('School', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		school_name: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		address: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
        city_name: {
			type: DataTypes.STRING(191),
			allowNull: true,
		},
        district_name: {
			type: DataTypes.STRING(191),
			allowNull: true,
		},
        state: {
			type: DataTypes.STRING(191),
			allowNull: true,
		},
        pin_code: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
        affilition_no: {
			type: DataTypes.STRING(191),
			allowNull: true,
		},
		email_id: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		mobile_no: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(666),
			allowNull: false,
		},
		role_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
		},
		status: {
			type: DataTypes.BOOLEAN(true),
			allowNull: true,
			defaultValue: '1'
		},
		created_by: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
		},
		updated_by: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		}
	}, {
		tableName: 'schools'
	});

	School.associate = function(models) {
		// associations can be defined here
		
	};

	School.getSchool = async (reqData) => {
		try {
			return await School.findOne({
				where: {
					email_id: reqData.email_id
				},
				attributes: [
					'id', 'school_name', 'email_id', 'mobile_no', 'password', 'role_id', 'status'
				]
			});
		} catch (e) {
			return false;
		}
	}

	School.checkSchool = async (reqData) => {
		try {
			return await School.findOne({
				where: {
					email_id: reqData.email_id,
					status: true
				},
				attributes: ['id','email_id','status']
			});
		} catch (e) {
			return false;
		}
	}

	School.getDS = async () => { // only for masters
		try {
			return await School.findAll({
				where:{
					status: true
				},
				attributes: ['id', 'school_name']
			});
		} catch (e) {
			return [];
		}
	};

    School.getList = async () => {
		try {
			return await School.findAll({
				where:{
					status: true
				},
				distinct: true,
				attributes: [
					'id', 'school_name', 'address', 'city_name', 'district_name', 'state', 'pin_code', 'affilition_no', 'email_id', 'mobile_no', 'password', 'role_id', 'status'
				]
			});
		} catch (e) {
			return [];
		}
	};

	School.getRecordById = async (id) => {
		try {
			const searchRecord = await School.findByPk(id, {
				attributes: ['id', 'school_name', 'address', 'city_name', 'district_name', 'state', 'pin_code', 'affilition_no ', 'email_id ', 'mobile_no', 'password', 'role_id', 'status']
			});
			if(!searchRecord || !searchRecord.status) return false;
			return searchRecord;
		} catch (e) {
			return false;
		}
	};

	return School;
};