
SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE patients (
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    userId CHAR(36) NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    ageGroup ENUM('infant', 'adult') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE medicines (
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    frequency ENUM('once', 'twice', 'threeTimes') NOT NULL,
    canBeUsedForInfants TINYINT(1) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE intakes (
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    patientId CHAR(36) NOT NULL,
    medicineId CHAR(36) NOT NULL,
    intakeTime TIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (patientId) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (medicineId) REFERENCES medicines(id) ON DELETE CASCADE
);

INSERT INTO patients (userId, gender, ageGroup) VALUES
(1, 'female', 'adult'),
(2, 'male', 'infant');

INSERT INTO medicines (name, frequency, canBeUsedForInfants) VALUES
('Paracetamol', 'threeTimes', 1),
('Antibiyotik', 'twice', 0); 

INSERT INTO intakes (patientId, medicineId, intakeTime) VALUES
((SELECT id FROM patients WHERE userId = 1), (SELECT id FROM medicines WHERE name = 'Paracetamol'), '20:00:00'),
((SELECT id FROM patients WHERE userId = 2), (SELECT id FROM medicines WHERE name = 'Paracetamol'), '08:00:00');

SET FOREIGN_KEY_CHECKS = 1;